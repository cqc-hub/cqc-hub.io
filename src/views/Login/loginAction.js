import common from '@/common';
import utils from '@/utils';
import {
  getCurrentInstance,
  nextTick,
  ref,
  reactive
}
  from 'vue';

const { initBtnStyle } = common;
const { setToken } = utils;

export const initLogin = function() {
  initStyle();
};

const initStyle = function() {
  const labels = document.querySelectorAll('.form-control label');

  labels.forEach(label => {
    label.innerHTML = label.innerText
      .split('')
      .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
      .join('');
  });
};

export const loginAction = function() {
  const { ctx } = getCurrentInstance();
  const loginLogo = ref({
    value: require('@/assets/imgs/login/loginLogo.svg')
  });

  const userCount = reactive({
    account: '',
    password: ''
  });

  nextTick(() => {
    ctx.$message.info('请登录');
    initBtnStyle();
    initLogin();
  });

  const goLogin = function() {
    const form = document.querySelector('.login-form-validator');
    form.submit();
  };

  const formSubmit = function(e) {
    e.preventDefault();
    setToken(1);
  };

  const inputChange = function(e, prop) {
    const { target: { value }} = e;
    userCount[prop] = value;
  };

  return {
    loginLogo,
    goLogin,
    inputChange,
    formSubmit
  };
};
