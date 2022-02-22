export function testFunction() {
    document.getElementById('output').innerText = document.getElementById('test').value;
}
window.testFunction = testFunction;