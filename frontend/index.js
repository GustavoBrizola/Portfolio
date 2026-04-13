import BackendCheck from './src/api/CheckBackend.js';


const btn = document.getElementById('button');


btn?.addEventListener('click', () => 
{
    BackendCheck(true)
});

