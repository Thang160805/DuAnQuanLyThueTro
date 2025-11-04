const paymentOptions = document.querySelectorAll('.payment-option');
        
        paymentOptions.forEach(option => {
            option.addEventListener('click', () => {
                // Xóa class 'active' khỏi tất cả
                paymentOptions.forEach(opt => opt.classList.remove('active'));
                
                // Thêm class 'active' cho cái được click
                option.classList.add('active');
                
                // Tự động check radio button bên trong nó
                option.querySelector('input[type="radio"]').checked = true;
            });
        });

        // Tự động active cái được check sẵn khi tải trang
        const checkedRadio = document.querySelector('input[type="radio"]:checked');
        if (checkedRadio) {
            checkedRadio.closest('.payment-option').classList.add('active');
        }