create database ihearth;

use ihearth;

create table user {
  user_id int not null auto_increment,
  email varchar(100) not null,
  password varchar(100) not null,
  first_name varchar(50) not null,
  last_name varchar(50) not null,
  dob date not null,
  gender varchar(1) not null,
  total_savings float not null,
  primary key (user_id)
};

create table business {
  business_id int not null auto_increment,
  email varchar(100) not null,
  password varchar(100) not null,
  company_name varchar(50) not null,
  address varchar(50) not null,
  city varchar(50) not null,
  state varchar(20) not null,
  zipcode int not null,
  primary key (business_id)
};

create table coupon {
  coupon_id int not null auto_increment,
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
  foreign key (business_id),
  primary key (coupon_id)
};

create table user_coupon {
  user_coupon_id int not null auto_increment,
  user boolean,
  expired boolean,
  foreign key (user_id),
  foreign key (coupon_id),
  primary key (user_coupon_id)
};


create table beacon {
  beacon_id int not null auto_increment,
  uuid varchar(100) not null,
  section varchar(20) not null,
  foreign key (business_id),
  primary key (beacon_id)
};

create table coupon_beacon {
  coupon_beacon_id int not null auto_increment,
  foreign key (beacon_id),
  foreign key (coupon_id),
  primary key (coupon_beacon_id)
};
