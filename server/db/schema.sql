create database ihearth;

use ihearth;

create table user (
  user_id int not null auto_increment,
  email varchar(100) not null,
  password varchar(100) not null,
  first_name varchar(50) not null,
  last_name varchar(50) not null,
  dob date not null,
  gender varchar(1) not null,
  total_savings float not null,
  
  primary key (user_id)
);

create table business (
  business_id int not null auto_increment,
  email varchar(100) not null,
  password varchar(100) not null,
  company_name varchar(50) not null,
  address varchar(50) not null,
  city varchar(50) not null,
  state varchar(20) not null,
  zipcode int not null,
  
  primary key (business_id)
);

create table coupon (
  coupon_id int not null auto_increment,
  business_id int,
  title varchar(300) not null,
  image varchar(300) not null,
  item_name varchar(100) not null,
  description varchar(300) not null,
  original_price float not null,
  coupon_price float not null,
  coupon_savings float not null,
  start_at date not null,
  end_at date not null,
  created_at date not null,
  
  primary key (coupon_id),
  
  index business_id (business_id),
  foreign key (business_id)
    references business (business_id)
    on delete cascade
    on update cascade
);

create table user_coupon (
  user_coupon_id int not null auto_increment,
  user_id int,
  coupon_id int,
  used boolean,
  expired boolean,
  
  primary key (user_coupon_id),
  
  index user_id (user_id),
  foreign key (user_id)
    references user (user_id)
    on delete set null
    on update cascade,
  
  index coupon_id (coupon_id),
  foreign key (coupon_id)
    references coupon (coupon_id)
    on delete set null
    on update cascade
);

create table beacon (
  beacon_id int not null auto_increment,
  business_id int,
  uuid varchar(100) not null,
  section varchar(20) not null,
  
  primary key (beacon_id),
  
  index business_id (business_id),
  foreign key (business_id)
    references business (business_id)
    on delete cascade
    on update cascade
);

create table coupon_beacon (
  coupon_beacon_id int not null auto_increment,
  beacon_id int,
  coupon_id int,
  
  primary key (coupon_beacon_id),
  
  index beacon_id (beacon_id),
  foreign key (beacon_id)
    references beacon (beacon_id)
    on delete cascade
    on update cascade,
  
  index coupon_id (coupon_id),
  foreign key (coupon_id)
    references coupon (coupon_id)
    on delete cascade
    on update cascade
);
