$(document).ready(function () {
    checkAdminLogin();

    $('#sidebarToggle').click(function () {
        $('#sidebar').toggleClass('collapsed');
        $('.main-content').toggleClass('expanded');
    });

    $('.nav-link[data-page]').click(function (e) {
        e.preventDefault();
        const page = $(this).data('page');
        navigateToPage(page);
    });

    $('#adminLoginForm').submit(function (e) {
        e.preventDefault();
        const username = $('#adminUsername').val();
        const password = $('#adminPassword').val();
        adminLogin(username, password);
    });

    $('#logoutBtn, #dropdownLogout').click(function (e) {
        e.preventDefault();
        logoutAdmin();
    });

    $('#addTourBtn').click(function () {
        $('#tourForm')[0].reset();
        $('#tourId').val('');
        $('#tourModalTitle').text('Thêm tour mới');
        $('#tourModal').modal('show');
    });

    $('#saveTourBtn').click(function () {
        if (!$('#tourForm')[0].checkValidity()) {
            $('#tourForm')[0].reportValidity();
            return;
        }

        const tourId = $('#tourId').val();
        const tourData = {
            name: $('#tourName').val(),
            category: $('#tourCategory').val(),
            destination: $('#tourDestination').val(),
            duration: $('#tourDuration').val(),
            groupSize: $('#tourGroupSize').val(),
            price: $('#tourPrice').val(),
            discount: $('#tourDiscount').val(),
            status: $('#tourStatus').val(),
            description: $('#tourDescription').val(),
            itinerary: $('#tourItinerary').val(),
            image: 'https://source.unsplash.com/800x600/?travel,' + $('#tourDestination').val()
        };

        if (tourId) {
            tourData.id = tourId;
            updateTour(tourData)
                .then(response => {
                    if (response.success) {
                        $('#tourModal').modal('hide');
                        loadTours();
                        alert('Cập nhật tour thành công!');
                    } else {
                        alert('Cập nhật tour thất bại: ' + response.message);
                    }
                })
                .catch(error => {
                    console.error('Update tour error:', error);
                    alert('Cập nhật tour thất bại. Vui lòng thử lại sau.');
                });
        } else {
            addTour(tourData)
                .then(response => {
                    if (response.success) {
                        $('#tourModal').modal('hide');
                        loadTours();
                        alert('Thêm tour mới thành công!');
                    } else {
                        alert('Thêm tour mới thất bại: ' + response.message);
                    }
                })
                .catch(error => {
                    console.error('Add tour error:', error);
                    alert('Thêm tour mới thất bại. Vui lòng thử lại sau.');
                });
        }
    });

    $('#addUserBtn').click(function () {
        $('#userForm')[0].reset();
        $('#userId').val('');
        $('#userModalTitle').text('Thêm người dùng mới');
        $('#userModal').modal('show');
    });

    $('#saveUserBtn').click(function () {
        if (!$('#userForm')[0].checkValidity()) {
            $('#userForm')[0].reportValidity();
            return;
        }

        const userId = $('#userId').val();
        const userData = {
            name: $('#userName').val(),
            email: $('#userEmail').val(),
            phone: $('#userPhone').val(),
            password: $('#userPassword').val(),
            role: $('#userRole').val(),
            status: $('#userStatus').val()
        };

        if (userId) {
            userData.id = userId;
            updateUser(userData)
                .then(response => {
                    if (response.success) {
                        $('#userModal').modal('hide');
                        loadUsers();
                        alert('Cập nhật người dùng thành công!');
                    } else {
                        alert('Cập nhật người dùng thất bại: ' + response.message);
                    }
                })
                .catch(error => {
                    console.error('Update user error:', error);
                    alert('Cập nhật người dùng thất bại. Vui lòng thử lại sau.');
                });
        } else {
            addUser(userData)
                .then(response => {
                    if (response.success) {
                        $('#userModal').modal('hide');
                        loadUsers();
                        alert('Thêm người dùng mới thành công!');
                    } else {
                        alert('Thêm người dùng mới thất bại: ' + response.message);
                    }
                })
                .catch(error => {
                    console.error('Add user error:', error);
                    alert('Thêm người dùng mới thất bại. Vui lòng thử lại sau.');
                });
        }
    });

    $('#tourFilterBtn').click(function () {
        loadTours();
    });

    $('#bookingFilterBtn').click(function () {
        loadBookings();
    });

    $('#userFilterBtn').click(function () {
        loadUsers();
    });

    $('#exportBookingsBtn').click(function () {
        alert('Chức năng xuất Excel sẽ được phát triển sau');
    });

    $('#generalSettingsForm, #paymentSettingsForm, #adminProfileForm, #changePasswordForm').submit(function (e) {
        e.preventDefault();
        alert('Cài đặt đã được lưu thành công!');
    });
});

function checkAdminLogin() {
    const isAdminLoggedIn = localStorage.getItem('adminLoggedIn');

    if (!isAdminLoggedIn) {
        $('#loginCheckModal').modal('show');
    } else {
        loadDashboardData();
        navigateToPage('dashboard');
    }
}

function adminLogin(username, password) {
    adminLoginApi(username, password)
        .then(response => {
            if (response.success) {
                localStorage.setItem('adminLoggedIn', 'true');
                localStorage.setItem('adminId', response.adminId);
                $('#loginCheckModal').modal('hide');
                loadDashboardData();
                navigateToPage('dashboard');
            } else {
                $('#loginError').removeClass('d-none');
            }
        })
        .catch(error => {
            console.error('Admin login error:', error);
            $('#loginError').removeClass('d-none');
        });
}

function logoutAdmin() {
    localStorage.removeItem('adminLoggedIn');
    localStorage.removeItem('adminId');
    window.location.href = 'admin.html';
}

function navigateToPage(page) {
    $('.page').removeClass('active');
    $(`#${page}-page`).addClass('active');
    $('.nav-link').removeClass('active');
    $(`.nav-link[data-page="${page}"]`).addClass('active');

    switch (page) {
        case 'dashboard':
            loadDashboardData();
            break;
        case 'tours':
            loadTours();
            break;
        case 'bookings':
            loadBookings();
            break;
        case 'users':
            loadUsers();
            break;
    }
}

function loadDashboardData() {
    getDashboardStats()
        .then(stats => {
            $('#totalTours').text(stats.totalTours);
            $('#totalBookings').text(stats.totalBookings);
            $('#totalUsers').text(stats.totalUsers);
            $('#totalRevenue').text(formatCurrency(stats.totalRevenue));
            loadRecentBookings();
            loadPopularTours();
        })
        .catch(error => {
            console.error('Error loading dashboard stats:', error);
        });
}

function loadRecentBookings() {
    getRecentBookings()
        .then(bookings => {
            displayRecentBookings(bookings);
        })
        .catch(error => {
            console.error('Error loading recent bookings:', error);
        });
}

function displayRecentBookings(bookings) {
    const bookingsContainer = $('#recentBookings');
    bookingsContainer.empty();

    if (bookings.length === 0) {
        bookingsContainer.html('<tr><td colspan="6" class="text-center">Không có đơn đặt tour nào</td></tr>');
        return;
    }

    bookings.forEach(booking => {
        const statusClass = getStatusClass(booking.status);
        const statusText = getStatusText(booking.status);

        const bookingRow = `
            <tr>
                <td>${booking.id}</td>
                <td>${booking.tourName}</td>
                <td>${booking.customerName}</td>
                <td>${formatDate(booking.bookingDate)}</td>
                <td><span class="badge ${statusClass}">${statusText}</span></td>
                <td>${formatCurrency(booking.totalAmount)}</td>
            </tr>
        `;

        bookingsContainer.append(bookingRow);
    });
}

function loadPopularTours() {
    getPopularTours()
        .then(tours => {
            displayPopularTours(tours);
        })
        .catch(error => {
            console.error('Error loading popular tours:', error);
        });
}

function displayPopularTours(tours) {
    const toursContainer = $('#popularTours');
    toursContainer.empty();

    if (tours.length === 0) {
        toursContainer.html('<tr><td colspan="5" class="text-center">Không có tour nào</td></tr>');
        return;
    }

    tours.forEach(tour => {
        const statusClass = getTourStatusClass(tour.status);
        const statusText = getTourStatusText(tour.status);

        const tourRow = `
            <tr>
                <td>${tour.name}</td>
                <td>${tour.bookingCount}</td>
                <td>
                    <div class="rating">
                        ${getRatingStars(tour.rating)}
                    </div>
                </td>
                <td>${formatCurrency(tour.price)}</td>
                <td><span class="badge ${statusClass}">${statusText}</span></td>
            </tr>
        `;

        toursContainer.append(tourRow);
    });
}

function loadTours() {
    const search = $('#tourSearchInput').val();
    const category = $('#tourCategoryFilter').val();
    const status = $('#tourStatusFilter').val();

    getTours(search, category, status)
        .then(tours => {
            displayTours(tours);
        })
        .catch(error => {
            console.error('Error loading tours:', error);
        });
}

function displayTours(tours) {
    const toursContainer = $('#toursList');
    toursContainer.empty();

    if (tours.length === 0) {
        toursContainer.html('<tr><td colspan="8" class="text-center">Không có tour nào</td></tr>');
        return;
    }

    tours.forEach(tour => {
        const statusClass = getTourStatusClass(tour.status);
        const statusText = getTourStatusText(tour.status);

        const tourRow = `
            <tr>
                <td>${tour.id}</td>
                <td>
                    <img src="${tour.image}" alt="${tour.name}" width="50" height="50" class="rounded">
                </td>
                <td>${tour.name}</td>
                <td>${tour.destination}</td>
                <td>${tour.duration}</td>
                <td>${formatCurrency(tour.price)}</td>
                <td><span class="badge ${statusClass}">${statusText}</span></td>
                <td>
                    <div class="action-buttons">
                        <button class="btn btn-sm btn-info edit-tour-btn" data-id="${tour.id}" title="Chỉnh sửa">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn btn-sm btn-danger delete-tour-btn" data-id="${tour.id}" title="Xóa">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;

        toursContainer.append(tourRow);
    });

    $('.edit-tour-btn').click(function () {
        const tourId = $(this).data('id');
        editTour(tourId);
    });

    $('.delete-tour-btn').click(function () {
        const tourId = $(this).data('id');
        deleteTour(tourId);
    });
}

function editTour(tourId) {
    getTourDetails(tourId)
        .then(tour => {
            $('#tourId').val(tour.id);
            $('#tourName').val(tour.name);
            $('#tourCategory').val(tour.category);
            $('#tourDestination').val(tour.destination);
            $('#tourDuration').val(tour.duration);
            $('#tourGroupSize').val(tour.groupSize);
            $('#tourPrice').val(tour.price);
            $('#tourDiscount').val(tour.discount);
            $('#tourStatus').val(tour.status);
            $('#tourDescription').val(tour.description);
            $('#tourItinerary').val(tour.itinerary);
            $('#tourModalTitle').text('Chỉnh sửa tour');
            $('#tourModal').modal('show');
        })
        .catch(error => {
            console.error('Error loading tour details:', error);
            alert('Không thể tải thông tin tour. Vui lòng thử lại sau.');
        });
}

function deleteTour(tourId) {
    if (confirm('Bạn có chắc muốn xóa tour này?')) {
        deleteTourApi(tourId)
            .then(response => {
                if (response.success) {
                    loadTours();
                    alert('Xóa tour thành công!');
                } else {
                    alert('Xóa tour thất bại: ' + response.message);
                }
            })
            .catch(error => {
                console.error('Delete tour error:', error);
                alert('Xóa tour thất bại. Vui lòng thử lại sau.');
            });
    }
}

function loadBookings() {
    const search = $('#bookingSearchInput').val();
    const status = $('#bookingStatusFilter').val();
    const date = $('#bookingDateFilter').val();

    getBookings(search, status, date)
        .then(bookings => {
            displayBookings(bookings);
        })
        .catch(error => {
            console.error('Error loading bookings:', error);
        });
}

function displayBookings(bookings) {
    const bookingsContainer = $('#bookingsList');
    bookingsContainer.empty();

    if (bookings.length === 0) {
        bookingsContainer.html('<tr><td colspan="8" class="text-center">Không có đơn đặt tour nào</td></tr>');
        return;
    }

    bookings.forEach(booking => {
        const statusClass = getStatusClass(booking.status);
        const statusText = getStatusText(booking.status);

        const bookingRow = `
            <tr>
                <td>${booking.id}</td>
                <td>${booking.tourName}</td>
                <td>${booking.customerName}</td>
                <td>${booking.numPersons}</td>
                <td>${formatDate(booking.travelDate)}</td>
                <td>${formatCurrency(booking.totalAmount)}</td>
                <td><span class="badge ${statusClass}">${statusText}</span></td>
                <td>
                    <div class="action-buttons">
                        <button class="btn btn-sm btn-primary view-booking-btn" data-id="${booking.id}" title="Xem chi tiết">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button class="btn btn-sm btn-danger delete-booking-btn" data-id="${booking.id}" title="Xóa">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;

        bookingsContainer.append(bookingRow);
    });

    $('.view-booking-btn').click(function () {
        const bookingId = $(this).data('id');
        viewBookingDetails(bookingId);
    });

    $('.delete-booking-btn').click(function () {
        const bookingId = $(this).data('id');
        deleteBooking(bookingId);
    });
}

function viewBookingDetails(bookingId) {
    getBookingDetails(bookingId)
        .then(booking => {
            const bookingDetailHTML = `
                <div class="row">
                    <div class="col-md-6">
                        <div class="booking-detail-section">
                            <h5>Thông tin khách hàng</h5>
                            <div class="booking-info-item">
                                <span class="label">Họ và tên:</span>
                                <span>${booking.customerName}</span>
                            </div>
                            <div class="booking-info-item">
                                <span class="label">Email:</span>
                                <span>${booking.email}</span>
                            </div>
                            <div class="booking-info-item">
                                <span class="label">Số điện thoại:</span>
                                <span>${booking.phone}</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="booking-detail-section">
                            <h5>Thông tin đơn hàng</h5>
                            <div class="booking-info-item">
                                <span class="label">Mã đơn:</span>
                                <span>${booking.id}</span>
                            </div>
                            <div class="booking-info-item">
                                <span class="label">Ngày đặt:</span>
                                <span>${formatDate(booking.bookingDate)}</span>
                            </div>
                            <div class="booking-info-item">
                                <span class="label">Trạng thái:</span>
                                <span class="badge ${getStatusClass(booking.status)}">${getStatusText(booking.status)}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-12">
                        <div class="booking-detail-section">
                            <h5>Thông tin tour</h5>
                            <div class="row">
                                <div class="col-md-8">
                                    <div class="booking-info-item">
                                        <span class="label">Tên tour:</span>
                                        <span>${booking.tourName}</span>
                                    </div>
                                    <div class="booking-info-item">
                                        <span class="label">Điểm đến:</span>
                                        <span>${booking.destination}</span>
                                    </div>
                                    <div class="booking-info-item">
                                        <span class="label">Thời gian:</span>
                                        <span>${booking.duration}</span>
                                    </div>
                                    <div class="booking-info-item">
                                        <span class="label">Ngày khởi hành:</span>
                                        <span>${formatDate(booking.travelDate)}</span>
                                    </div>
                                    <div class="booking-info-item">
                                        <span class="label">Số người:</span>
                                        <span>${booking.numPersons}</span>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <img src="${booking.tourImage}" alt="${booking.tourName}" class="img-fluid rounded">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-6">
                        <div class="booking-detail-section">
                            <h5>Ghi chú</h5>
                            <p>${booking.notes || 'Không có ghi chú'}</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="booking-detail-section">
                            <h5>Chi tiết thanh toán</h5>
                            <div class="booking-price-summary">
                                <div class="booking-price-item">
                                    <span>Giá tour:</span>
                                    <span>${formatCurrency(booking.price)}</span>
                                </div>
                                <div class="booking-price-item">
                                    <span>Số người:</span>
                                    <span>${booking.numPersons}</span>
                                </div>
                                ${booking.discount ? `
                                <div class="booking-price-item">
                                    <span>Giảm giá:</span>
                                    <span>-${booking.discount}%</span>
                                </div>` : ''}
                                <div class="booking-price-item total">
                                    <span>Tổng tiền:</span>
                                    <span>${formatCurrency(booking.totalAmount)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            $('#bookingDetailContent').html(bookingDetailHTML);

            if (booking.status === 'pending') {
                $('#confirmBookingBtn').show();
                $('#cancelBookingBtn').show();
            } else if (booking.status === 'confirmed') {
                $('#confirmBookingBtn').hide();
                $('#cancelBookingBtn').show();
            } else {
                $('#confirmBookingBtn').hide();
                $('#cancelBookingBtn').hide();
            }

            $('#confirmBookingBtn').data('id', booking.id);
            $('#cancelBookingBtn').data('id', booking.id);

            $('#bookingDetailModal').modal('show');
        })
        .catch(error => {
            console.error('Error loading booking details:', error);
            alert('Không thể tải thông tin đơn hàng. Vui lòng thử lại sau.');
        });
}

function deleteBooking(bookingId) {
    if (confirm('Bạn có chắc muốn xóa đơn hàng này?')) {
        deleteBookingApi(bookingId)
            .then(response => {
                if (response.success) {
                    loadBookings();
                    alert('Xóa đơn hàng thành công!');
                } else {
                    alert('Xóa đơn hàng thất bại: ' + response.message);
                }
            })
            .catch(error => {
                console.error('Delete booking error:', error);
                alert('Xóa đơn hàng thất bại. Vui lòng thử lại sau.');
            });
    }
}

function loadUsers() {
    const search = $('#userSearchInput').val();
    const role = $('#userRoleFilter').val();

    getUsers(search, role)
        .then(users => {
            displayUsers(users);
        })
        .catch(error => {
            console.error('Error loading users:', error);
        });
}

function displayUsers(users) {
    const usersContainer = $('#usersList');
    usersContainer.empty();

    if (users.length === 0) {
        usersContainer.html('<tr><td colspan="8" class="text-center">Không có người dùng nào</td></tr>');
        return;
    }

    users.forEach(user => {
        const statusClass = user.status === 'active' ? 'status-active' : 'status-inactive';
        const statusText = user.status === 'active' ? 'Hoạt động' : 'Vô hiệu hóa';

        const userRow = `
            <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.phone || 'N/A'}</td>
                <td>${user.role === 'admin' ? 'Admin' : 'Người dùng'}</td>
                <td>${formatDate(user.registrationDate)}</td>
                <td><span class="badge ${statusClass}">${statusText}</span></td>
                <td>
                    <div class="action-buttons">
                        <button class="btn btn-sm btn-info edit-user-btn" data-id="${user.id}" title="Chỉnh sửa">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn btn-sm btn-danger delete-user-btn" data-id="${user.id}" title="Xóa">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;

        usersContainer.append(userRow);
    });

    $('.edit-user-btn').click(function () {
        const userId = $(this).data('id');
        editUser(userId);
    });

    $('.delete-user-btn').click(function () {
        const userId = $(this).data('id');
        deleteUser(userId);
    });
}

function editUser(userId) {
    getUserDetails(userId)
        .then(user => {
            $('#userId').val(user.id);
            $('#userName').val(user.name);
            $('#userEmail').val(user.email);
            $('#userPhone').val(user.phone);
            $('#userPassword').val('');
            $('#userRole').val(user.role);
            $('#userStatus').val(user.status);
            $('#userModalTitle').text('Chỉnh sửa người dùng');
            $('#userModal').modal('show');
        })
        .catch(error => {
            console.error('Error loading user details:', error);
            alert('Không thể tải thông tin người dùng. Vui lòng thử lại sau.');
        });
}

function deleteUser(userId) {
    if (confirm('Bạn có chắc muốn xóa người dùng này?')) {
        deleteUserApi(userId)
            .then(response => {
                if (response.success) {
                    loadUsers();
                    alert('Xóa người dùng thành công!');
                } else {
                    alert('Xóa người dùng thất bại: ' + response.message);
                }
            })
            .catch(error => {
                console.error('Delete user error:', error);
                alert('Xóa người dùng thất bại. Vui lòng thử lại sau.');
            });
    }
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
            return 'status-pending';
        case 'confirmed':
            return 'status-confirmed';
        case 'cancelled':
            return 'status-cancelled';
        case 'completed':
            return 'status-active';
        default:
            return 'status-inactive';
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

function getTourStatusClass(status) {
    switch (status) {
        case 'active':
            return 'status-active';
        case 'inactive':
            return 'status-inactive';
        case 'coming':
            return 'status-coming';
        default:
            return 'status-inactive';
    }
}

function getTourStatusText(status) {
    switch (status) {
        case 'active':
            return 'Đang mở bán';
        case 'inactive':
            return 'Ngừng bán';
        case 'coming':
            return 'Sắp mở bán';
        default:
            return 'Không xác định';
    }
}

function getRatingStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '<i class="fas fa-star text-warning"></i>';
        } else if (i - 0.5 <= rating) {
            stars += '<i class="fas fa-star-half-alt text-warning"></i>';
        } else {
            stars += '<i class="far fa-star text-warning"></i>';
        }
    }
    return stars;
}