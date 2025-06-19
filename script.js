document.addEventListener('DOMContentLoaded', () => {
    // Sipariş butonları için uyarı
    document.querySelectorAll('.btn-order').forEach(button => {
      button.addEventListener('click', function () {
        const productName = this.closest('.product-card').querySelector('h3').textContent;
        alert(`"${productName}" için siparişiniz alındı. Kısa süre içinde sizinle iletişime geçeceğiz.`);
      });
    });
  
    // WhatsApp butonu
    const whatsappBtn = document.querySelector('.btn-whatsapp');
    if (whatsappBtn) {
      whatsappBtn.addEventListener('click', (e) => {
        e.preventDefault();
        alert('WhatsApp hattımıza yönlendiriliyorsunuz...');
        // window.location.href = "https://wa.me/905551234567"; // Gerçek bağlantı buraya eklenebilir
      });
    }
  });
  