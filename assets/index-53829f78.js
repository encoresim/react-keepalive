import{c4 as g,bc as h,r as u,j as s,I as i,B as x,bs as b}from"./index-04493f89.js";import{F as t,a as f}from"./index-95a8fbcf.js";const v="/super-admin/assets/work-0e98ba0b.png";b("h-10 leading-10 px-[15px] border-2 border-[#3A83F7] rounded-[20px]");const m="memo_login_form_data";var w={name:"1cq6ysz",styles:"width:100%;max-width:800px;min-height:500px;overflow:hidden"},N={name:"pn1bc1",styles:"width:100%;height:100vh;min-height:100vh;padding:20px;min-height:calc(100vh - env(safe-area-inset-bottom))"};function I(){const c=g(),[n,d]=h.useMessage(),[e,l]=u.useState(()=>{const a=localStorage.getItem(m),o={email:void 0,password:void 0,remember:!1};if(a){const r=JSON.parse(a);return r!=null&&r.remember?r:o}else return o}),p=async()=>{if(!(e!=null&&e.email)){n.error("请输入邮箱");return}if(!(e!=null&&e.password)){n.error("请输入密码");return}e!=null&&e.remember&&localStorage.setItem(m,JSON.stringify(e)),c({pathname:"/"})};return s("div",{className:"login flex justify-center items-center bg-[#edf5fa] dark:bg-[#333]",css:N},d,s("div",{className:"card shadow-xl bg-[#fff] flex rounded-xl",css:w},s("div",{className:"left w-[50%] p-[10px] sm:block hidden cover-img-login"},s("img",{style:{objectFit:"contain"},src:v,className:"w-full h-full cover"})),s("div",{className:"right  w-full px-[20px] pt-[40px] sm:w-[50%] bg-[#fbfdff] dark:bg-[#222]"},s("h1",{className:"text-center text-[24px] font-bold"},"Super Admin Login"),s("p",{className:"text-center text-[14px] mt-[10px] text-[#999]"},"Welcome to Super Admin"),s("div",{className:"mt-[30px] px-[30px]"},s(t,{labelCol:{span:24},wrapperCol:{span:24},layout:"vertical"},s(t.Item,{label:"账户"},s(i,{value:e==null?void 0:e.email,onChange:a=>{l({...e,email:a.target.value})},placeholder:"请输入邮箱"})),s(t.Item,{label:"密码"},s(i.Password,{value:e==null?void 0:e.password,onChange:a=>{l({...e,password:a.target.value})},placeholder:"请输入密码"})),s(t.Item,null,s(f,{checked:e==null?void 0:e.remember,onChange:a=>{l({...e,remember:a.target.checked})}},"记住我")),s(t.Item,null,s(x,{onClick:()=>{p()},type:"primary",className:"w-full"},"登录")))))))}export{I as default};