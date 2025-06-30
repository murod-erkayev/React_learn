CREATE TABLE USERS (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) UNIQUE,
    password_hash VARCHAR(255),
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    phone_number VARCHAR(20),
    profile_image VARCHAR(255),
    current_location VARCHAR(255),
    city VARCHAR(100),
    country VARCHAR(100),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    is_active BOOLEAN DEFAULT TRUE,
    language_preference VARCHAR(50)
);

CREATE TABLE CATEGORIES (
    category_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    description TEXT,
    icon VARCHAR(255),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE LOCATIONS (
    location_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    description TEXT,
    full_description TEXT,
    city VARCHAR(100),
    country VARCHAR(100),
    latitude DECIMAL(10, 7),
    longitude DECIMAL(10, 7),
    main_image VARCHAR(255),
    base_price DECIMAL(10, 2),
    category_id INT,
    is_active BOOLEAN DEFAULT TRUE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES CATEGORIES (category_id)
);

CREATE TABLE LOCATION_IMAGES (
    image_id INT PRIMARY KEY AUTO_INCREMENT,
    location_id INT,
    image_url VARCHAR(255),
    image_type VARCHAR(50),
    sort_order INT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (location_id) REFERENCES LOCATIONS (location_id)
);

CREATE TABLE BOOKINGS (
    booking_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    location_id INT,
    booking_date DATETIME,
    start_date DATETIME,
    end_date DATETIME,
    total_amount DECIMAL(10, 2),
    booking_status VARCHAR(50),
    payment_method VARCHAR(50),
    payment_status VARCHAR(50),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES USERS (user_id),
    FOREIGN KEY (location_id) REFERENCES LOCATIONS (location_id)
);

CREATE TABLE REVIEWS (
    review_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    location_id INT,
    rating DECIMAL(2, 1),
    review_text TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES USERS (user_id),
    FOREIGN KEY (location_id) REFERENCES LOCATIONS (location_id)
);

CREATE TABLE WISHLIST (
    wishlist_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    location_id INT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES USERS (user_id),
    FOREIGN KEY (location_id) REFERENCES LOCATIONS (location_id)
);

CREATE TABLE NOTIFICATIONS (
    notification_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    title VARCHAR(255),
    message TEXT,
    notification_type VARCHAR(50),
    is_read BOOLEAN DEFAULT FALSE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES USERS (user_id)
);

CREATE TABLE SEARCH_HISTORY (
    search_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    search_query VARCHAR(255),
    search_type VARCHAR(50),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES USERS (user_id)
);

CREATE TABLE PAYMENT_METHODS (
    payment_method_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    method_type VARCHAR(50),
    card_last_four VARCHAR(4),
    card_brand VARCHAR(50),
    is_default BOOLEAN DEFAULT FALSE,
    is_active BOOLEAN DEFAULT TRUE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES USERS (user_id)
);

CREATE TABLE FLIGHTS (
    flight_id INT PRIMARY KEY AUTO_INCREMENT,
    departure_city VARCHAR(100),
    arrival_city VARCHAR(100),
    airline VARCHAR(100),
    departure_time DATETIME,
    arrival_time DATETIME,
    price DECIMAL(10, 2),
    flight_number VARCHAR(50),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE HOTELS (
    hotel_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    description TEXT,
    city VARCHAR(100),
    country VARCHAR(100),
    latitude DECIMAL(10, 7),
    longitude DECIMAL(10, 7),
    price_per_night DECIMAL(10, 2),
    rating DECIMAL(2, 1),
    main_image VARCHAR(255),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE USER_SESSIONS (
    session_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    session_token VARCHAR(255),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    expires_at DATETIME,
    is_active BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (user_id) REFERENCES USERS (user_id)
);