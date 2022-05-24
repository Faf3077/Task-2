module.exports = ['/add-abonent', async function (pool, { query, body }) {
	const [abonents] = await pool.query('SELECT * FROM abonents');

	return `
		<h1>Добавление студента</h1>
		<form method="post" action="/add-abonent">
			<input type="text" placeholder="Имя студента" minLength="2" name="name"/>
			<input type="text" placeholder="Фамилия студента" minLength="2" name="lastname"/>
			<input type="text" placeholder="Отчество студента" minLength="2" name="dadname"/>
			<input type="text" placeholder="Группа студента" minLength="2" name="clas"/>
			<input type="text" placeholder="Дата рождения" name="date"/>
			<input type="submit" value="Добавить"/>
		</form>
	`;
}];