import $ from 'jquery';
import { InteractiveTable } from './scripts/InteractiveTable';
import { users } from './users';

$(document).ready(function() {
  const tableHeader = $('<div class="table__row table__row--header"></div>');

  tableHeader
    .append('<div class="table__cell">ФИО</div>')
    .append('<div class="table__cell">Телефон</div>')
    .append('<div class="table__cell">Email</div>')
    .append('<div class="table__cell">Skype</div>')
    .append('<div class="table__cell">Комментарий</div>');

  const tableUsers = $('<div class="table__users"></div>');

  for (let i = 0; i < users.length; i++) {
    const row = $(`<div class="table__row" id="${i}"></div>`)
      .append(`<div class="table__cell">${users[i].name}</div>`)
      .append(`<div class="table__cell">${users[i].phone}</div>`)
      .append(`<div class="table__cell">${users[i].email}</div>`)
      .append(`<div class="table__cell">${users[i].skype}</div>`)
      .append(`<div class="table__cell">${users[i].comment}</div>`);

    row.click(function() {
      this.parentElement.parentElement.remove();
      InteractiveTable(this.id, tableWrapper);
    });

    tableUsers.append(row);
  }

  const tableWrapper = $('<div class="table__wrapper"></div>')
    .append(tableHeader)
    .append(tableUsers);

  $('.table').append(tableWrapper);

  if ($(window).width() < 500) {
    $('.table__cell:nth-child(1)').prepend('Name:  ');
    $('.table__cell:nth-child(2)').prepend('Phone:  ');
    $('.table__cell:nth-child(3)').prepend('Email:  ');
    $('.table__cell:nth-child(4)').prepend('Skype:  ');
    $('.table__cell:nth-child(5)').prepend('Message:  ');
  }
});
