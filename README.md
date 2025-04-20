# 🚀 DevOps na Prática — Aula 1

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-blue)
![Docker](https://img.shields.io/badge/docker-ready-green)
![Kubernetes](https://img.shields.io/badge/kubernetes-configurado-blueviolet)
![License](https://img.shields.io/badge/license-MIT-lightgrey)

---

## 🎯 Objetivo da Aula

Implementar um pipeline DevOps do zero, com foco em **Docker**, **Kubernetes**, **GitHub Actions** e **Node.js**, simulando um deploy real de uma API em ambiente de orquestração.

---

## 🧱 Estrutura do Projeto

devops-na-pratica-api/ ├── api-node-express/ # Código da API Node.js │ ├── Dockerfile │ ├── index.js │ ├── package.json │ └── ... ├── devops-na-pratica/ │ ├── infra/ │ │ └── terraform/ # (Aula 2 em diante) │ └── k8s/ # Manifests do Kubernetes │ ├── deployment.yaml │ └── service.yaml └── README.md


---

## 🛠️ O que foi feito

### ✅ 1. API Express
- Criamos uma API básica com Node.js e Express.
- Arquivo principal: `index.js`

### ✅ 2. Docker
- Criamos o `Dockerfile`
- Build e push para o Docker Hub:
```bash
docker build -t vinicius994/api-node-devops:latest .
docker push vinicius994/api-node-devops:latest

### ✅ 3. Kubernetes

    Criamos os manifests:

        deployment.yaml

        service.yaml

    Deploy com kubectl apply -f

### ✅ 4. Git & GitHub

    Projeto versionado com Git.

    Integração com repositório GitHub.

    Criamos e autenticamos com chave SSH.

✅ 5. CI/CD com GitHub Actions (introdução)

    Setup inicial da automação CI/CD (aula 2 será o foco)

curl http://<minikube-ip>:<nodeport>/  # exemplo:
curl http://192.168.49.2:32534/

🖼️ Prints do projeto
✔️ API rodando no terminal:
![image](https://github.com/user-attachments/assets/793ee99a-df67-4ea9-8389-de55888f5049)


✔️ Docker Hub:

📌 Próximas Aulas

🔜 Aula 2:

    Introdução ao Terraform

    Infraestrutura como código

    Pipeline CI/CD com GitHub Actions e deploy automático no Kubernetes

👨‍🏫 Parabéns!

Você chegou até aqui com a API rodando no Kubernetes, imagem publicada no Docker Hub e repositório configurado! 🚀👏
Agora estamos prontos para entrar no mundo real do DevOps com Terraform + GitHub Actions + IAC!


