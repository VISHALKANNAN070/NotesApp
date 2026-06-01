create table users (
    id serial primary key,
    name varchar(50) not null,
    email varchar(255) unique not null,
    password_hash text not null,
    created_at timestamptz default now()
);

create table notes (
    id serial primary key,
    user_id integer not null,
    title varchar(255) not null,
    content text,
    created_at timestamptz default now(),
    updated_at timestamptz default now(),
    constraint link_user
        foreign key(user_id)
        references users(id)
        on delete cascade
);
