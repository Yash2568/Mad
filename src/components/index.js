window.addEventListener('load', e => {
    registerSW();
});

async function registerSW(){
    if('serviceWorker' in navigator) {
        try {
            await navigator.serviceWorker.register('../../service-worker.js');
        }
        
        catch (e) {
            alert('Service Worker Registeration Failed. Sorry.');
        }
    } else {
        document.querySelector('.alert').removeAttribute('hidden');
    }
}

export { default as Navbar } from './Navbar';
export { default as Main } from './main';
export { default as Product } from './Products';
export { default as Footer } from './Footer';