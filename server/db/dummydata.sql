
--dummy data
-- // user
insert into user (email, password, logged_in, device_id, first_name, last_name, dob, gender, total_savings)
values ('jamesgu@gmail.com', 'password', false, 'jamesdeviceid', 'James', 'Gu', '1993-05-21 12:00:00', 'm', 100.00);

insert into user (email, password, logged_in, device_id, first_name, last_name, dob, gender, total_savings)
values ('keepthemonochrome@gmail.com', 'password', false, 'susandeviceid', 'Susan', 'Hong', '1994-08-19 12:00:00', 'f', 99.00);

insert into user (email, password, logged_in, device_id, first_name, last_name, dob, gender, total_savings)
values ('joshuapeng7@gmail.com', 'password', false, 'joshdeviceid', 'Josh', 'Peng', '1985-10-20 12:00:00', 'm', 98.00);

-- // user_coupon
insert into user_coupon (used, expired, activated, id_user, id_coupon)
values (false, false, true, 1, 1);

insert into user_coupon (used, expired, activated, id_user, id_coupon)
values (false, false, true, 2, 1);

into into user_coupon (used, expired, activated, id_user, id_coupon)
values (false, false, true, 2, 2);

-- // business
insert into business (email, password, company_name, address, city, state, zipcode)
values ('nike@gmail.com', 'password', 'Nike', '744 Market Street', 'San Francisco', 'CA', 94112);

insert into business (email, password, company_name, address, city, state, zipcode)
values ('thenorthface@gmail.com', 'password', 'The North Face', '744 Market Street', 'San Francisco', 'CA', 94112);

insert into business (email, password, company_name, address, city, state, zipcode)
values ('beardpapas@gmail.com', 'password', 'Beard Papas', '744 Market Street', 'San Francisco', 'CA', 94112);

-- // coupon
insert into coupon (business_id, qrcode, title, image, item_name, description, original_price, coupon_price, coupon_savings, start_at, end_at)
values (1, '$5 off hoodie', 'qrcode1', 'https://facebook.github.io/react/img/logo_og.png', 'Hoodie', 'Super Warm Hoodie', 10.00, 5.00, 5.00, '2017-01-05 16:00:00', '2017-01-29 18:00:00');

insert into coupon (business_id, qrcode, title, image, item_name, description, original_price, coupon_price, coupon_savings, start_at, end_at)
values (2, '$20 off sneakers', 'qrcode2', 'https://facebook.github.io/react/img/logo_og.png', 'Shoes', 'KangaROOS Sneakers', 120.00, 100.00, 20.00, '2017-01-05 01:00:00', '2017-01-29 03:00:00');

insert into coupon (business_id, qrcode, title, image, item_name, description, original_price, coupon_price, coupon_savings, start_at, end_at)
values (3, '$4 off shampoo', 'qrcode3', 'https://facebook.github.io/react/img/logo_og.png', 'Shampoo', 'Suave Biotin Infusion', 8.00, 4.00, 4.00, '2017-01-06 03:00:00', '2017-02-10 09:00:00');


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
