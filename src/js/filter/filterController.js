import Filter from './filterModel';
import * as view from './filterView';

export default async function (state) {
	// Создаем объект фильтьра
	if (!state.filter) state.filter = new Filter();

	// Получение параметров для фильтра
	await state.filter.getParams();

	// Отрисовка фильтра
	view.render(state.filter.params);

	// Делаем запрос на сервер
	await state.filter.getResults();

	// Обновляем счетчик на кнопке
	view.changeButtonText(state.filter.result.length);

	// Прослушка событий формы
	const form = document.querySelector('#filter-form');

	form.addEventListener('change', function(e){
		e.preventDefault();
		state.filter.query = view.getInput();
        console.log("state.filter.query", state.filter.query);
	})





}
