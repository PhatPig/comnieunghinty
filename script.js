function initMap() {
    // Vị trí của nhà hàng (ví dụ tọa độ của Hà Nội)
    var restaurantLocation = { lat: 11.2417514, lng: 108.3456594 };

    // Tạo bản đồ Google Maps
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: restaurantLocation
    });

    // Thêm một marker cho nhà hàng
    var marker = new google.maps.Marker({
        position: restaurantLocation,
        map: map,
        title: 'Cơm Niêu Nghìn Tỷ'
    });
}
