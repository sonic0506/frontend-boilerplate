<p align="center">
    <img alt="Gatsby" src="../assets/images/img-react-vite.png" width="250" />
</p>
<h1 align="center">
  React & Vite & TypeScript 
</h1>
<div align=center style="max-width: 445px;margin: 0 auto;">
    <img src="https://img.shields.io/badge/javascript-edda1c?style=for-the-badge&logo=javascript&logoColor=white"><img src="https://img.shields.io/badge/typescript-2f74c0?style=for-the-badge&logo=typescript&logoColor=white"><img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white"><img src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white"><img src="https://img.shields.io/badge/post css-DD3A0A?style=for-the-badge&logo=postcss&logoColor=white"><img src="https://img.shields.io/badge/tailwind css-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white"><img src="https://img.shields.io/badge/yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white"><img src="https://img.shields.io/badge/storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white"><img src="https://img.shields.io/badge/amazon s3-569A31?style=for-the-badge&logo=amazons3&logoColor=white"><img src="https://img.shields.io/badge/github actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white"><img src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white"><img src="https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white">
</div>

## 🚀 Quick start

1.  **Yarn Install**

    ```shell
    yarn
    ```

2.  **Local test**

    ```shell
    yarn start
    ```

    브라우저에서 http://localhost:5174을 열어 결과를 확인하세요.
    app/page.tsx를 수정하여 페이지 편집을 시작할 수 있습니다. 파일을 편집하면 페이지가 자동으로 업데이트됩니다.

3.  **build**
    ```shell
    yarn build
    ```

## 🚀 Default Setting

### Path Alias

```json
{
  "compilerOptions": {
    "baseUrl": "src",
    "paths": {
      "@components/*": ["components/*"],
      "@pages/*": ["pages/*"],
      "@apis/*": ["apis/*"],
      "@models/*": ["models/*"],
      "@hooks/*": ["hooks/*"],
      "@assets/*": ["assets/*"],
      "@src/*": ["*"]
    }
  }
}
```
