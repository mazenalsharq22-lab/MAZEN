// في index.html - تحديث المنتجات كل 5 ثواني
setInterval(function() {
    let updatedProducts = JSON.parse(localStorage.getItem("products") || "[]");
    if (JSON.stringify(updatedProducts) !== JSON.stringify(products)) {
        products = updatedProducts;
        render();
        console.log('تم تحديث القائمة تلقائيًا');
    }
}, 5000);

function orderProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    let imageNote = '';
    if (product.image.startsWith('data:')) {
        imageNote = '\n\n(الصورة متوفرة في المتجر)';
    } else {
        imageNote = `\n\nرابط صورة المنتج: ${product.image}`;
    }
    
    const message = `مرحباً، أريد طلب المنتج التالي:\n\nالمنتج: ${product.name}\nالسعر: ${product.price} ريال\nالفئة: ${product.category}\nالوصف: ${product.description}${imageNote}\n\nأرجو التواصل معي لاستكمال الطلب.`;
    const whatsappUrl = `https://wa.me/+967712433463?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}