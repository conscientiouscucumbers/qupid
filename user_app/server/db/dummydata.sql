-- dummy data
-- WARNING: DO NOT CHANGE THE ORDER OF QUERIES!

-- // user
insert into user (email, password, logged_in, device_id, first_name, last_name, dob, gender, total_savings)
values ('a', 'a', false, 'jamesdeviceid', 'James', 'Gu', '1993-05-21', 'male', 100.00);

insert into user (email, password, logged_in, device_id, first_name, last_name, dob, gender, total_savings)
values ('keepthemonochrome@gmail.com', 'password', false, 'susandeviceid', 'Susan', 'Hong', '1994-08-19', 'female', 99.00);

insert into user (email, password, logged_in, device_id, first_name, last_name, dob, gender, total_savings)
values ('josh', 'josh', false, 'joshdeviceid', 'Josh', 'Peng', '1985-10-20', 'male', 98.00);

-- // business
insert into business (email, password, company_name, address, city, state, zipcode)
values ('vineyardvines@gmail.com', 'password', 'Vineyard Vines', '744 Market Street', 'San Francisco', 'CA', 94112);

insert into business (email, password, company_name, address, city, state, zipcode)
values ('beardpapas@gmail.com', 'password', 'Beard Papas', '744 Market Street', 'San Francisco', 'CA', 94112);

insert into business (email, password, company_name, address, city, state, zipcode)
values ('hackreactor@gmail.com', 'password', 'Hack Reactor', '744 Market Street', 'San Francisco', 'CA', 94112);

-- // coupon: Active
-- // picture checked
insert into coupon (business_id, qrcode, title, image, item_name, description, original_price, coupon_price, coupon_savings, start_at, end_at)
values (1, '$20 Off Polo', '$20 Off Polo', 'https://storage.googleapis.com/ihearth-image/vineyardvines.jpg', 'Men’s Colorful Polo', "Now crafted with an updated fit, you'll never forget the colors of the rainbow!", 95.00, 75.00, 20.00, '2017-01-18 16:00:00', '2017-02-11 20:59:00');
-- // picture checked
insert into coupon (business_id, qrcode, title, image, item_name, description, original_price, coupon_price, coupon_savings, start_at, end_at)
values (1, '$10 Off Shorts', '$10 Off Shorts', 'https://storage.googleapis.com/ihearth-image/vineyardvinesshorts.jpg', 'Men’s Redux Seersucker Shorts', 'These casual shorts are perfect for the summer, the boat and for you.', 80.00, 70.00, 10.00, '2017-01-15 16:00:00', '2017-02-13 23:59:00');
-- // picture checked
insert into coupon (business_id, qrcode, title, image, item_name, description, original_price, coupon_price, coupon_savings, start_at, end_at)
values (2, 'Buy 1 Get 1 Free!', 'Buy 1 Get 1 Free!', 'https://storage.googleapis.com/ihearth-image/beardpapas.jpg', 'Delicious Cream Puffs', 'Delicious and warms the soul. Get your Beard Papas today!', 5.00, 2.50, 2.50, '2017-01-17 16:00:00', '2017-02-27 12:59:00');
-- // picture checked
insert into coupon (business_id, qrcode, title, image, item_name, description, original_price, coupon_price, coupon_savings, start_at, end_at)
values (3, '30% Off Tuition', '30% Off Tuition', 'https://storage.googleapis.com/ihearth-image/hackreactorstock1_resized.jpeg', 'JavaScript Skills', 'Reinvent your career in 12 weeks and level up your web dev skills!', 18000, 12600, 5400, '2017-01-15 03:00:00', '2018-02-27 16:00:00');

-- // coupon: Expired
-- // picture checked
insert into coupon (business_id, qrcode, title, image, item_name, description, original_price, coupon_price, coupon_savings, start_at, end_at)
values (2, '50% Off Cream Puff', '50% Off Cream Puff', 'https://storage.googleapis.com/ihearth-image/beardpapas2.jpg', 'Delicious Cream Puffs', 'Delicious and warms the soul. Get your Beard Papas today!', 5.00, 2.50, 2.50, '2017-01-10 16:00:00', '2017-01-11 16:00:00');

-- // coupon: Used
-- // picture checked
insert into coupon (business_id, qrcode, title, image, item_name, description, original_price, coupon_price, coupon_savings, start_at, end_at)
values (3, 'Free Precourse', 'Free Precourse', 'https://storage.googleapis.com/ihearth-image/hackreactorstock2_resized.jpeg', 'Free Prep Materials', 'Scared you can’t do recursion? Well get your tail out from between your legs and let’s n-queen it up!', 2500, 0, 2500, '2017-01-15 16:00:00', '2017-01-27 16:00:00');

-- // FOR DEMO RECORDING...comment out for live ///////////////////////////////////////////////////////////////
insert into coupon (business_id, qrcode, title, image, item_name, description, original_price, coupon_price, coupon_savings, start_at, end_at)
values (3, 'Free New Elevator', 'Free New Elevator', 'https://storage.googleapis.com/ihearth-image/elevator_resized.JPG', 'Working Elevator', 'Stair wars? Nah.', 2500, 0, 2500, '2017-01-15 16:00:00', '2017-02-27 16:00:00');
-- ///////////////////////////////////////////////////////////////////////////

-- WARNING: DO NOT CHANGE THE ORDER OF QUERIES!
-- // user_coupon
insert into user_coupon (user_id, coupon_id, user_qrcode, used, expired, activated)
values (1, 1, '$20 Off Polo:1', false, false, true);

insert into user_coupon (user_id, coupon_id, user_qrcode, used, expired, activated)
values (1, 2, '$10 Off Shorts:1', false, false, true);

insert into user_coupon (user_id, coupon_id, user_qrcode, used, expired, activated)
values (1, 3, 'Buy 1 Get 1 Free!:1', false, false, true);

insert into user_coupon (user_id, coupon_id, user_qrcode, used, expired, activated)
values (1, 4, '30% Off Tuition:1', false, false, true);

insert into user_coupon (user_id, coupon_id, user_qrcode, used, expired, activated)
values (1, 5, '50% Off Cream Puff:1', false, false, false);

-- // user_coupon: already used
insert into user_coupon (user_id, coupon_id, user_qrcode, used, expired, activated)
values (1, 6, 'Free Precourse:1', true, false, false);

insert into user_coupon (user_id, coupon_id, user_qrcode, used, expired, activated)
values (2, 1, '$20 Off Polo:2', false, false, true);

insert into user_coupon (user_id, coupon_id, user_qrcode, used, expired, activated)
values (2, 2, '$10 Off Shorts:2', false, false, true);

insert into user_coupon (user_id, coupon_id, user_qrcode, used, expired, activated)
values (3, 1, '$20 Off Polo:3', false, false, true);

insert into user_coupon (user_id, coupon_id, user_qrcode, used, expired, activated)
values (3, 2, '$10 Off Shorts:3', false, false, true);

insert into user_coupon (user_id, coupon_id, user_qrcode, used, expired, activated)
values (3, 3, 'Buy 1 Get 1 Free!:3', false, false, true);

insert into user_coupon (user_id, coupon_id, user_qrcode, used, expired, activated)
values (3, 4, '30% Off Tuition:3', false, false, true);

-- // beacon
insert into beacon (business_id, beacon_uuid, section)
values (1, 'UUID1', 'Menswear');

insert into beacon (business_id, beacon_uuid, section)
values (2, 'UUID2', 'Sweets');

insert into beacon (business_id, beacon_uuid, section)
values (3, 'UUID3', 'JavaScript');

insert into beacon (business_id, beacon_uuid, section)
values (3, 'UUID4', 'Demo');

-- // coupon_beacon
insert into coupon_beacon (coupon_id, beacon_uuid) values (1, 'UUID1');
insert into coupon_beacon (coupon_id, beacon_uuid) values (2, 'UUID1');
insert into coupon_beacon (coupon_id, beacon_uuid) values (3, 'UUID2');
insert into coupon_beacon (coupon_id, beacon_uuid) values (4, 'UUID3');
insert into coupon_beacon (coupon_id, beacon_uuid) values (5, 'UUID2');
insert into coupon_beacon (coupon_id, beacon_uuid) values (6, 'UUID3');

-- // FOR DEMO ///////////////////////////////////////////////////////////////
insert into coupon_beacon (coupon_id, beacon_uuid) values (7, 'UUID4');

-- ///////////////////////////////////////////////////////////////////////////

-- insert into user_coupon (user_id, coupon_id, user_qrcode, used, expired, activated)
-- values (1, 7, 'Free New Elevator:1', false, false, false);