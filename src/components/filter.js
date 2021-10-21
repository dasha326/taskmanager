const filterItemTemplate = (filter, isChecked) => {
    const {name, count, disabled} = filter;
    return (
        `<input
          type="radio"
          id="filter__${name}"
          class="filter__input visually-hidden"
          name="filter"
          ${isChecked ? "checked" : ""}
          ${disabled ? "disabled" : ""}
        />
        <label for="filter__${name}" class="filter__label"
          >${name} <span class="filter__${name}-count">${count}</span></label
        >`
    )
};

export const filterTemplate = (filters) => {
    const filterMarkup = filters.map((item, i) => filterItemTemplate(item, i === 0)).join('\n');
    return (
        `<section class="main__filter filter container">
            ${filterMarkup}
        </section>`
    )
};