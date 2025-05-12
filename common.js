
// common.js
function getCurrentUser() {
    return JSON.parse(sessionStorage.getItem("currentUser"));
  }
  
  function getUserKey(baseKey) {
    const user = getCurrentUser();
    if (!user) return baseKey;
    return baseKey + "_" + user.email;
  }  
  
  // Por exemplo, ao trabalhar com colaboradores:
  function loadColaboradores() {
    const key = getUserKey("colaboradores");
    const colaboradores = JSON.parse(localStorage.getItem(key) || "[]");
    // ... atualize a interface com os colaboradores
    return colaboradores;
  }
  
  function saveColaboradores(colaboradores) {
    const key = getUserKey("colaboradores");
    localStorage.setItem(key, JSON.stringify(colaboradores));
  }

