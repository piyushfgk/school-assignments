/**
 * PDF Generator for School Assignments
 * Uses jsPDF and html2canvas for high-quality PDF generation
 */

// PDF Generation Function
function generatePDF() {
    // Check if libraries are loaded
    if (typeof html2canvas === 'undefined') {
        showMessage('html2canvas library not loaded. Please refresh the page.', 'error');
        return;
    }
    
    if (typeof jsPDF === 'undefined') {
        showMessage('jsPDF library not loaded. Please refresh the page.', 'error');
        return;
    }

    // Show loading message
    const button = document.getElementById('pdf-button');
    const originalText = button.textContent;
    button.textContent = 'Generating PDF...';
    button.disabled = true;

    // Get the worksheet content
    const element = document.querySelector('.sheet');
    
    // Configuration for html2canvas - optimized for smaller file size
    const options = {
        scale: 1.5, // Reduced scale for smaller file size
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        logging: false,
        width: element.scrollWidth,
        height: element.scrollHeight,
        imageTimeout: 0,
        removeContainer: true
    };

    // Generate canvas from HTML
    html2canvas(element, options).then(function(canvas) {
        // Create PDF using jsPDF 1.5.3 API with proper margins
        const pdf = new jsPDF('p', 'mm', 'a4');
        
        // Define margins (in mm)
        const margin = 15; // 15mm margins on all sides
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const contentWidth = pdfWidth - (margin * 2);
        const contentHeight = pdfHeight - (margin * 2);
        
        // Calculate image dimensions to fit within margins
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = Math.min(contentWidth / imgWidth, contentHeight / imgHeight);
        
        // Center the image with margins
        const imgX = margin + (contentWidth - imgWidth * ratio) / 2;
        const imgY = margin + (contentHeight - imgHeight * ratio) / 2;
        
        // Convert to JPEG for smaller file size (instead of PNG)
        // Try different quality levels to optimize file size
        let imgData = canvas.toDataURL('image/jpeg', 0.7); // 70% quality for smaller size
        
        // If still too large, reduce quality further
        if (imgData.length > 500000) { // If larger than ~500KB
            imgData = canvas.toDataURL('image/jpeg', 0.5); // 50% quality
        }
        
        // Add image to PDF with proper margins
        pdf.addImage(imgData, 'JPEG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
        
        // Generate filename with current date
        const now = new Date();
        const dateStr = now.toISOString().split('T')[0];
        const filename = `math-worksheet-${dateStr}.pdf`;
        
        // Get the actual PDF size before saving
        const pdfOutput = pdf.output('datauristring');
        const actualFileSizeKB = Math.round((pdfOutput.length * 3) / 4 / 1024); // Convert base64 to bytes
        
        // Save PDF
        pdf.save(filename);
        
        // Reset button
        button.textContent = originalText;
        button.disabled = false;
        
        // Show success message with actual PDF file size
        showMessage(`PDF generated successfully! (${actualFileSizeKB}KB)`, 'success');
        
    }).catch(function(error) {
        console.error('Error generating PDF:', error);
        
        // Reset button
        button.textContent = originalText;
        button.disabled = false;
        
        // Show error message
        showMessage('Error generating PDF. Please try again.', 'error');
    });
}

// Print Function (Alternative to PDF)
function printWorksheet() {
    // Hide the back button for printing
    const backButton = document.querySelector('.back-button');
    const pdfButton = document.getElementById('pdf-button');
    
    if (backButton) backButton.style.display = 'none';
    if (pdfButton) pdfButton.style.display = 'none';
    
    // Print
    window.print();
    
    // Restore buttons
    if (backButton) backButton.style.display = 'block';
    if (pdfButton) pdfButton.style.display = 'inline-block';
}

// Show message function
function showMessage(message, type) {
    // Remove existing messages
    const existingMessage = document.querySelector('.pdf-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create message element
    const messageDiv = document.createElement('div');
    messageDiv.className = `pdf-message ${type}`;
    messageDiv.textContent = message;
    messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 10px 20px;
        border-radius: 5px;
        color: white;
        font-weight: bold;
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
        ${type === 'success' ? 'background-color: #4CAF50;' : 'background-color: #f44336;'}
    `;
    
    // Add animation CSS
    if (!document.querySelector('#pdf-message-styles')) {
        const style = document.createElement('style');
        style.id = 'pdf-message-styles';
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(messageDiv);
    
    // Remove message after 3 seconds
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.remove();
        }
    }, 3000);
}

// Initialize PDF functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Wait a bit for libraries to load
    setTimeout(function() {
        // Check if required libraries are loaded
        if (typeof html2canvas === 'undefined') {
            console.error('html2canvas library not loaded. Please check the CDN link.');
            return;
        }
        
        if (typeof jsPDF === 'undefined') {
            console.error('jsPDF library not loaded. Please check the CDN link.');
            return;
        }
    }, 1000); // Wait 1 second for libraries to load
});
