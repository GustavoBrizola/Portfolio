import BackendCheck from '../api/CheckBackend.js';

const btn = document.getElementById('button');
const con = document.getElementById('container');   

btn?.addEventListener('click', () => 
{
    BackendCheck(true)
});
