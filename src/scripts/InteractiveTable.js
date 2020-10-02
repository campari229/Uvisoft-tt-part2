import $ from 'jquery';
import { users } from '../users';

export const InteractiveTable = (rowId, staticTable) => {
  const interactiveTable = $('<div class="interactive-table"></div>');
  const interactiveTableUsers
  = $('<div class="interactive-table__users"></div>');

  const contentMaker = (id) => {
    const interactiveTableContent
  = $('<div class="interactive-table__content"></div>');
    const closeButton
    = $('<button class="interactive-table__close-btn">X</button>');

    closeButton.click(function() {
      this.parentElement.parentElement.remove();
      $('.table').append(staticTable);
    });

    interactiveTableContent
      .append(
        `<p class="interactive-table__text">Добавлен: 
        ${users[id].info.registrationDate}</p>`,
      )
      .append(
        `<p class="interactive-table__text">Возраст: 
        ${users[id].info.age}</p>`,
      )
      .append(
        `<p class="interactive-table__text">Семейное положение: 
        ${users[id].info.maritalStatys}</p>`,
      )
      .append(
        `<p class="interactive-table__text">Работает: 
        ${users[id].info.work}</p>`,
      )
      .append(
        `<p class="interactive-table__text">Образование: 
        ${users[id].info.education}</p>`,
      )
      .append(closeButton);

    return interactiveTableContent;
  };

  for (let i = 0; i < users.length; i++) {
    const user = $(`<div class="interactive-table__user" id="${i}"></div>`);

    user.click(function() {
      if (this.parentElement.parentElement.children[1]) {
        this.parentElement.parentElement.children[1].remove();
      }
      interactiveTable.append(contentMaker(this.id));

      $('.interactive-table__user')
        .removeClass('interactive-table__user--active');

      $(`#${this.id}`).addClass('interactive-table__user--active');
    });

    user
      .append(`<p class="interactive-table__name">${users[i].name}</p>`)
      .append(`<p class="interactive-table__email">${users[i].email}</p>`)
      .append(`<p class="interactive-table__phone">${users[i].phone}</p>`);

    interactiveTableUsers.append(user);
  }

  interactiveTable
    .append(interactiveTableUsers)
    .append(contentMaker(rowId));

  $('.table').append(interactiveTable);

  $(`#${rowId}`).addClass('interactive-table__user--active');

  return interactiveTable;
};
