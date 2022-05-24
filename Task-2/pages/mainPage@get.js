module.exports = ['/', async function (pool, { params, body }) {
	const [abonents] = await pool.query('SELECT * FROM abonents');
	return `
		<h1>Список студентов</h1>
		<ul>
			${abonents.map(abonent => `<li><p="${abonent.id}">${abonent.name} - ${abonent.lastname} - ${abonent.dadname} - ${abonent.clas}
			 <a href="/abonent/${abonent.id}">Удалить</a></p></li>`).join('')}
		</ul>
		<button><a href="/add-abonent">Добавить студента</a></button>
	`;
}];