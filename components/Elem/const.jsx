export const config = {
    columns: [
        { title: 'Ваш возраст', setVal: Age => ({ Age }) },
        { title: 'Ваш рост, в см', setVal: Height => ({ Height }) },
        { title: 'Ваш вес, в кг:', setVal: Weight => ({ Weight }), }
    ]
};