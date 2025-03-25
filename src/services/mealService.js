export default{
    async getMeals(){
        const response = await fetch('http://localhost:3000/meals');

        const data = response.json();

        return data;
    }
}