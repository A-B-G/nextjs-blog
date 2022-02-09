
export async function getDbData() {

    const res = await fetch('https://test-blog-db.herokuapp.com/test');
    const data = res.json();
    console.log("data:", data);
    return data;
}
