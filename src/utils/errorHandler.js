// src/utils/errorHandler.js
class ErrorHandler {
  static handle(error, context) {
    console.error(`❌ Error in ${context}:`, error.message);
    
    // Log to file for debugging
    // Send to monitoring service
    // Provide user-friendly message
    
    process.exit(1);
  }
}