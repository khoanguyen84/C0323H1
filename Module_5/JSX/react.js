// React.createElement(type, props, childrens)
// + type: tên thẻ hoặc component
// + props: danh sách các thuộc tính, là 1 đối tượng
// + children: text hoặc children con

// const h1 = React.createElement("h1", null, "Learning React JS");

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(h1);

const loginForm = React.createElement("form", {
    formMethod: "GET",
    formAction: "#"
}, React.createElement("div", null,
    React.createElement("label", null, "Email"),
    React.createElement("input", { type: "email", id: "email", placeholder: "Email" }))
    , React.createElement("div", null,
        React.createElement("label", null, "Password"),
        React.createElement("input", { type: "password", id: "password", placeholder: "Password" }))
    , React.createElement("button", {
        type: "button",
        onClick: () => {
            alert(JSON.stringify({
                "email": document.querySelector('#email').value,
                "password": document.querySelector('#password').value,
            }))
        }
    }, "Login")
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(loginForm);
