$(document).ready(function() {
    checkUserLogin();
    loadFeaturedTours();
    $('#loginBtn').click(function() {
        $('#loginModal').modal('show');
    });
  
    $('#registerLink').click(function(e) {
        e.preventDefault();
        alert('Chức năng đăng ký sẽ được phát triển sau');
    });
    
  
    $('#loginForm').submit(function(e) {
        e.preventDefault();
        
        const username = $('#username').val();
        const password = $('#password').val();
     
        loginUser(username, password);
    });
    
    
    $('#myBookingsBtn').click(function() {
        loadUserBookings();
        $('#myBookingsModal').modal('show');
    });
    
   
    $('#bookTourBtn').click(function() {
        const isLoggedIn = localStorage.getItem('userLoggedIn');
        
        if (isLoggedIn) {
            $('#tourDetailModal').modal('hide');
            $('#bookingModal').modal('show');
        } else {
            $('#tourDetailModal').modal('hide');
            $('#loginModal').modal('show');
            alert('Vui lòng đăng nhập để đặt tour');
        }
    });
    

    $('#submitBookingBtn').click(function() {

        if (!$('#bookingForm')[0].checkValidity()) {
            $('#bookingForm')[0].reportValidity();
            return;
        }
   
        const bookingData = {
            tourId: $('#tourId').val(),
            fullName: $('#fullName').val(),
            email: $('#email').val(),
            phone: $('#phone').val(),
            travelDate: $('#travelDate').val(),
            numPersons: $('#numPersons').val(),
            notes: $('#notes').val(),
            userId: localStorage.getItem('userId') || null
        };
        

        createBooking(bookingData);
    });
    

    $('#contactForm').submit(function(e) {
        e.preventDefault();
        alert('Cảm ơn bạn đã gửi tin nhắn. Chúng tôi sẽ liên hệ lại trong thời gian sớm nhất!');
        this.reset();
    });
});
function checkUserLogin() {
    const isLoggedIn = localStorage.getItem('userLoggedIn') === 'true'; 
    const username = localStorage.getItem('username');
    const userRole = localStorage.getItem('userRole');

    if (isLoggedIn && username) {

        $('#loginBtnGroup').addClass('d-none');
        $('#userMenuGroup').removeClass('d-none');

     
        $('#usernameDisplay').text(username);

        if (userRole === 'admin') {
            $('#goToAdminBtn').show();
        } else {
            $('#goToAdminBtn').hide();
        }
    } else {
    
        $('#loginBtnGroup').removeClass('d-none');
        $('#userMenuGroup').addClass('d-none');
    }
}

$(document).ready(checkUserLogin);
console.log(localStorage.getItem('userLoggedIn')); 
console.log(localStorage.getItem('username'));    
console.log(localStorage.getItem('userRole'));  
function loadFeaturedTours() {

    getFeaturedTours()
        .then(tours => {
            displayTours(tours);
        })
        .catch(error => {
            console.error('Error loading tours:', error);
        });
}

function displayTours(tours) {
    const tourContainer = $('#featuredTours');
    tourContainer.empty();
    
    if (tours.length === 0) {
        tourContainer.html('<div class="col-12 text-center"><p>Không có tour nào để hiển thị</p></div>');
        return;
    }
    
    tours.forEach(tour => {
        const discountedPrice = tour.discount ? tour.price * (1 - tour.discount / 100) : tour.price;
        const tourCard = `
            <div class="col-lg-4 col-md-6">
                <div class="card tour-card">
                    <img src="${tour.image}" class="card-img-top" alt="${tour.name}">
                    <div class="card-body">
                        <h5 class="card-title">${tour.name}</h5>
                        <p class="card-text">${tour.shortDescription || tour.description.substring(0, 100)}...</p>
                        <div class="tour-info">
                            <span><i class="fas fa-map-marker-alt me-1"></i> ${tour.destination}</span>
                            <span><i class="fas fa-clock me-1"></i> ${tour.duration}</span>
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="tour-price">
                                ${formatCurrency(discountedPrice)}
                                ${tour.discount ? `<span class="original-price">${formatCurrency(tour.price)}</span>` : ''}
                            </div>
                            <button class="btn btn-primary btn-sm view-tour-btn" data-id="${tour.id}">
                                Chi tiết
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        tourContainer.append(tourCard);
    });
    
    $('.view-tour-btn').click(function() {
        const tourId = $(this).data('id');
        viewTourDetails(tourId);
    });
}

function viewTourDetails(tourId) {
    getTourDetails(tourId)
        .then(tour => {
            const discountedPrice = tour.discount ? tour.price * (1 - tour.discount / 100) : tour.price;
            $('#tourTitle').text(tour.name);
        
            const tourDetailHTML = `
                <div class="row">
                    <div class="col-md-6">
                        <img src="${tour.image}" class="img-fluid rounded" alt="${tour.name}">
                    </div>
                    <div class="col-md-6">
                        <h4>${tour.name}</h4>
                        <div class="tour-features">
                            <div class="feature-item">
                                <div class="feature-icon">
                                    <i class="fas fa-map-marker-alt"></i>
                                </div>
                                <div>
                                    <strong>Điểm đến:</strong> ${tour.destination}
                                </div>
                            </div>
                            <div class="feature-item">
                                <div class="feature-icon">
                                    <i class="fas fa-clock"></i>
                                </div>
                                <div>
                                    <strong>Thời gian:</strong> ${tour.duration}
                                </div>
                            </div>
                            <div class="feature-item">
                                <div class="feature-icon">
                                    <i class="fas fa-users"></i>
                                </div>
                                <div>
                                    <strong>Số người tối đa:</strong> ${tour.groupSize} người
                                </div>
                            </div>
                            <div class="feature-item">
                                <div class="feature-icon">
                                    <i class="fas fa-tag"></i>
                                </div>
                                <div>
                                    <strong>Giá:</strong> ${formatCurrency(discountedPrice)}
                                    ${tour.discount ? `<span class="original-price">${formatCurrency(tour.price)}</span>` : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col-12">
                        <h5>Mô tả</h5>
                        <p>${tour.description}</p>
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col-12">
                        <h5>Lịch trình</h5>
                        <div class="itinerary">
                            ${formatItinerary(tour.itinerary)}
                        </div>
                    </div>
                </div>
            `;
            
            $('#tourDetailContent').html(tourDetailHTML);
      
            $('#tourId').val(tour.id);
        
            $('#tourDetailModal').modal('show');
        })
        .catch(error => {
            console.error('Error loading tour details:', error);
            alert('Không thể tải thông tin tour. Vui lòng thử lại sau.');
        });
}


function formatItinerary(itinerary) {

    if (typeof itinerary === 'string') {
  
        const days = itinerary.split('\n\n');
        
        return days.map((day, index) => {
            const lines = day.split('\n');
            const title = lines[0];
            const details = lines.slice(1).join('<br>');
            
            return `
                <div class="itinerary-day">
                    <h5>Ngày ${index + 1}: ${title}</h5>
                    <p>${details}</p>
                </div>
            `;
        }).join('');
    }
   
    if (Array.isArray(itinerary)) {
        return itinerary.map((day, index) => {
            return `
                <div class="itinerary-day">
                    <h5>Ngày ${index + 1}: ${day.title}</h5>
                    <p>${day.description}</p>
                </div>
            `;
        }).join('');
    }
    
    return '<p>Không có thông tin lịch trình</p>';
}

function loginUser(username, password) {
    login(username, password)
        .then(response => {
            if (response.success) {
        
                localStorage.setItem('userLoggedIn', 'true');
                localStorage.setItem('userId', response.userId);
                localStorage.setItem('username', response.username);
             
                $('#loginModal').modal('hide');
                checkUserLogin();
    
                alert('Đăng nhập thành công!');
            } else {
                alert('Đăng nhập thất bại: ' + response.message);
            }
        })
        .catch(error => {
            console.error('Login error:', error);
            alert('Đăng nhập thất bại. Vui lòng thử lại sau.');
        });
}

function createBooking(bookingData) {

    addBooking(bookingData)
        .then(response => {
            if (response.success) {
      
                $('#bookingModal').modal('hide');
                alert('Đặt tour thành công! Mã đơn hàng của bạn là: ' + response.bookingId);
           
                $('#bookingForm')[0].reset();
            } else {
                alert('Đặt tour thất bại: ' + response.message);
            }
        })
        .catch(error => {
            console.error('Booking error:', error);
            alert('Đặt tour thất bại. Vui lòng thử lại sau.');
        });
}


function loadUserBookings() {
    const userId = localStorage.getItem('userId');
    
    if (!userId) {
        $('#myBookingsList').html('<tr><td colspan="6" class="text-center">Vui lòng đăng nhập để xem đơn hàng</td></tr>');
        return;
    }
    

    getUserBookings(userId)
        .then(bookings => {
            displayUserBookings(bookings);
        })
        .catch(error => {
            console.error('Error loading bookings:', error);
            $('#myBookingsList').html('<tr><td colspan="6" class="text-center">Không thể tải đơn hàng. Vui lòng thử lại sau.</td></tr>');
        });
}


function displayUserBookings(bookings) {
    const bookingsContainer = $('#myBookingsList');
    bookingsContainer.empty();
    
    if (bookings.length === 0) {
        bookingsContainer.html('<tr><td colspan="6" class="text-center">Bạn chưa có đơn đặt tour nào</td></tr>');
        return;
    }
    
    bookings.forEach(booking => {
        const statusClass = getStatusClass(booking.status);
        const statusText = getStatusText(booking.status);
        
        const bookingRow = `
            <tr>
                <td>${booking.id}</td>
                <td>${booking.tourName}</td>
                <td>${formatDate(booking.travelDate)}</td>
                <td>${booking.numPersons}</td>
                <td><span class="badge ${statusClass}">${statusText}</span></td>
                <td>${formatCurrency(booking.totalAmount)}</td>
            </tr>
        `;
        
        bookingsContainer.append(bookingRow);
    });
}


function formatCurrency(amount) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
}


function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN');
}


function getStatusClass(status) {
    switch (status) {
        case 'pending':
            return 'bg-warning';
        case 'confirmed':
            return 'bg-success';
        case 'cancelled':
            return 'bg-danger';
        case 'completed':
            return 'bg-info';
        default:
            return 'bg-secondary';
    }
}


function getStatusText(status) {
    switch (status) {
        case 'pending':
            return 'Chờ xác nhận';
        case 'confirmed':
            return 'Đã xác nhận';
        case 'cancelled':
            return 'Đã hủy';
        case 'completed':
            return 'Hoàn thành';
        default:
            return 'Không xác định';
    }
}

$('#logoutBtn').click(function() {
    logoutUser();
});

function logoutUser() {

    localStorage.removeItem('userLoggedIn');
    localStorage.removeItem('userId');
    localStorage.removeItem('username');
    localStorage.removeItem('userRole');
    

    checkUserLogin();
    
  
    alert('Đăng xuất thành công!');
}