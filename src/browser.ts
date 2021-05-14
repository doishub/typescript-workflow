import AppClass from "./App/App";

declare global {
    interface Window { App: AppClass; }
}

window.App = AppClass;