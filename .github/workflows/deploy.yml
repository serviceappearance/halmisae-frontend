name: 컨테이너 기반 배포하기

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: 코드 체크아웃
        uses: actions/checkout@v2

      - name: Node.js 설정
        uses: actions/setup-node@v3
        with:
          node-version: "18"

      - name: 의존성 설치, 빌드 및 테스트
        run: |
          npm ci
          npm run build --if-present
          npm test

      - name: Docker Buildx 설정
        uses: docker/setup-buildx-action@v2

      - name: Docker 이미지 빌드
        run: |
          docker build -t web-server .

      - name: AWS 자격 증명 설정
        uses: aws-actions/configure-aws-credentials@v4
        with:
          aws-region: ap-northeast-2
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}

      - name: AWS ECR 로그인
        id: login-ecr
        uses: aws-actions/amazon-ecr-login@v2

      - name: Docker 이미지 태그 및 푸시
        run: |
          docker tag web-server ${{ steps.login-ecr.outputs.registry }}/web-server:latest
          docker push ${{ steps.login-ecr.outputs.registry }}/web-server:latest

      - name: EC2에 배포
        uses: appleboy/ssh-action@v1.0.3
        with:
          host: ${{ secrets.EC2_HOST }}
          username: ${{ secrets.EC2_USERNAME }}
          key: ${{ secrets.EC2_PRIVATE_KEY_PEM }}
          port: ${{ secrets.EC2_PORT }}
          script: |
            #!/bin/bash
            set -e
            docker stop web-server || true
            docker rm web-server || true
            docker pull ${{ steps.login-ecr.outputs.registry }}/web-server:latest
            docker run -d --name web-server -p 80:80 ${{ steps.login-ecr.outputs.registry }}/web-server:latest
        env:
          DOCKER_CLI_EXPERIMENTAL: enabled
