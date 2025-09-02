const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');

const darkMode = document.querySelector('.dark-mode');

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});

darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-variables');
    darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
    darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
})


Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
        <td>${order.productName}</td>
        <td>${order.productNumber}</td>
        <td>${order.paymentStatus}</td>
        <td class="${order.status === 'Declined' ? 'danger' : order.status === 'Pending' ? 'warning' : 'primary'}">${order.status}</td>
        <td class="primary">Details</td>
    `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
});





    // عند اختيار ملف
    document.getElementById('fileInput').addEventListener('change', function(event) {
        const file = event.target.files[0]; // الحصول على الملف المختار
        if (file) {
            const reader = new FileReader(); // إنشاء كائن FileReader لقراءة الملف

            // عند انتهاء قراءة الملف
            reader.onload = function(e) {
                const image = document.getElementById('previewImage'); // الحصول على عنصر الصورة
                image.src = e.target.result; // تعيين مصدر الصورة للبيانات التي تم قراءتها
            };

            reader.readAsDataURL(file); // قراءة الملف كـ URL
        }
    });
