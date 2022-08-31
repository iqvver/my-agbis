import React from "react";

const ServiceList = () => {
  const tree = document.getElementsByClassName("service-list");
  for (let li of tree) {
    let span = document.createElement("span");
    li.prepend(span);
    span.append(span.nextSibling); // поместить текстовый узел внутрь элемента <span>
  }

  //  ловим клики на всём дереве
  let handleCall = (event) => {
    if (event.target.tagName != "SPAN") {
    }
    let childrenContainer = event.target.querySelector("ul");
    if (!childrenContainer) return; // нет детей

    childrenContainer.hidden = !childrenContainer.hidden;

    if (childrenContainer.hidden) {
      event.target.classList.add("hide");
      event.target.classList.remove("show");
    } else {
      event.target.classList.add("show");
      event.target.classList.remove("hide");
    }
  };

  return (
    <div onClick={handleCall}>
      <ul className="service-list">
        <li className="list-menu">
          Химчистка
          <ul className="list-item">
            <li>Аксесуары</li>
            <li>Верхняя одежда</li>
            <li>Деловой костюм</li>
            <li>Джинса</li>
            <li>Куртка и пуховик</li>
            <li>Пальто и плащ</li>
          </ul>
        </li>
        <li className="list-menu">
          Аквачистка
          <ul className="list-item">
            <li>Аксесуары</li>
            <li>Верхняя одежда</li>
            <li>Деловой костюм</li>
            <li>Джинса</li>
            <li>Куртка и пуховик</li>
            <li>Пальто и плащ</li>
          </ul>
        </li>
        <li className="list-menu">
          Ремонт одежды
          <ul className="list-item">
            <li>Аксесуары</li>
            <li>Верхняя одежда</li>
            <li>Деловой костюм</li>
            <li>Джинса</li>
            <li>Куртка и пуховик</li>
            <li>Пальто и плащ</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default ServiceList;
