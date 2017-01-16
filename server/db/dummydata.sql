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
values ('nike@gmail.com', 'password', 'Nike', '744 Market Street', 'San Francisco', 'CA', 94112);

insert into business (email, password, company_name, address, city, state, zipcode)
values ('thenorthface@gmail.com', 'password', 'The North Face', '744 Market Street', 'San Francisco', 'CA', 94112);

insert into business (email, password, company_name, address, city, state, zipcode)
values ('beardpapas@gmail.com', 'password', 'Beard Papas', '744 Market Street', 'San Francisco', 'CA', 94112);

-- // coupon
insert into coupon (business_id, qrcode, title, image, item_name, description, original_price, coupon_price, coupon_savings, start_at, end_at)
values (1, 'qrcode1', '$5 OFF Hoodie', 'https://facebook.github.io/react/img/logo_og.png', 'Men\'s Half Dome Hoodie', 'Now crafted with an updated fit, this comfy pullover hooded sweatshirt is finished with athletic-style ribbed cuffs and hem.', 10.00, 5.00, 5.00, '2017-01-05 16:00:00', '2017-01-15 21:25:00');

insert into coupon (business_id, qrcode, title, image, item_name, description, original_price, coupon_price, coupon_savings, start_at, end_at)
values (2, 'qrcode2', '$20 OFF Sneakers', 'https://facebook.github.io/react/img/logo_og.png', 'Men’s Berkeley Redux Sneaker', 'This casual yet warm low-cut sneaker features a waterproof construction, synthetic insulation, and a grippy rubber sole.', 120.00, 100.00, 20.00, '2017-01-05 01:00:00', '2017-01-15 21:25:00');

insert into coupon (business_id, qrcode, title, image, item_name, description, original_price, coupon_price, coupon_savings, start_at, end_at)
values (3, 'qrcode3', '$4 OFF Shampoo', 'https://facebook.github.io/react/img/logo_og.png', 'Amino Acid Shampoo', 'A naturally-derived shampoo that cleanses and softens hair. Creates a rich, creamy lather for a delightful shampoo experience. A special blend of moisturizing ingredients imparts softness and shine as the formula adds body and fullness. Suitable for all hair and scalp types when mildness is desired.', 8.00, 4.00, 4.00, '2017-01-06 03:00:00', '2017-01-15 21:25:00');

insert into coupon (business_id, qrcode, title, image, item_name, description, original_price, coupon_price, coupon_savings, start_at, end_at)
values (3, 'qrcode4', '$4 OFF Conditioner', 'https://facebook.github.io/react/img/logo_og.png', 'Conditioner', 'Lorem Ipsum.', 8.00, 4.00, 4.00, '2017-01-15 03:00:00', '2017-02-10 09:00:00');

-- WARNING: DO NOT CHANGE THE ORDER OF QUERIES!
-- // user_coupon
insert into user_coupon (user_id, coupon_id, user_qrcode, used, expired, activated)
values (1, 1, 'qrcode1:1', false, false, true);

insert into user_coupon (user_id, coupon_id, user_qrcode, used, expired, activated)
values (2, 1, 'qrcode1:2', false, false, true);

insert into user_coupon (user_id, coupon_id, user_qrcode, used, expired, activated)
values (2, 2, 'qrcode1:2', false, false, true);

insert into user_coupon (user_id, coupon_id, user_qrcode, used, expired, activated)
values (1, 2, 'qrcode1:1', false, false, true);

insert into user_coupon (user_id, coupon_id, user_qrcode, used, expired, activated)
values (1, 3, 'qrcode1:1', false, false, true);

insert into user_coupon (user_id, coupon_id, user_qrcode, used, expired, activated)
values (1, 4, 'qrcode1:1', false, false, true);

insert into user_coupon (user_id, coupon_id, user_qrcode, used, expired, activated)
values (3, 1, 'qrcode1:3', false, false, true);

insert into user_coupon (user_id, coupon_id, user_qrcode, used, expired, activated)
values (3, 2, 'qrcode1:3', false, false, true);

insert into user_coupon (user_id, coupon_id, user_qrcode, used, expired, activated)
values (3, 3, 'qrcode1:3', false, false, true);

insert into user_coupon (user_id, coupon_id, user_qrcode, used, expired, activated)
values (3, 4, 'qrcode1:3', false, false, true);

insert into user_coupon (user_id, coupon_id, user_qrcode, used, expired, activated)
values (3, 1, 'qrcode1:3', false, false, true);

insert into user_coupon (user_id, coupon_id, user_qrcode, used, expired, activated)
values (3, 2, 'qrcode1:3', false, false, true);

insert into user_coupon (user_id, coupon_id, user_qrcode, used, expired, activated)
values (3, 3, 'qrcode1:3', false, false, true);

insert into user_coupon (user_id, coupon_id, user_qrcode, used, expired, activated)
values (3, 4, 'qrcode1:3', false, false, true);

-- // beacon
insert into beacon (business_id, beacon_uuid, section)
values (1, 'UUID1', 'Outers');

insert into beacon (business_id, beacon_uuid, section)
values (2, 'UUID2', 'Inner wear');

insert into beacon (business_id, beacon_uuid, section)
values (3, 'UUID3', 'Sweets');

-- // coupon_beacon
insert into coupon_beacon (coupon_id, beacon_uuid) values (1, 'UUID1');
insert into coupon_beacon (coupon_id, beacon_uuid) values (2, 'UUID2');
insert into coupon_beacon (coupon_id, beacon_uuid) values (3, 'UUID3');
