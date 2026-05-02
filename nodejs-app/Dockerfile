FROM node:18-slim

# 작업 디렉토리 생성
WORKDIR /app

# 의존성 복사 및 설치
COPY package*.json ./
RUN npm install

# 소스 복사
COPY . .

# 포트 개방 및 실행
EXPOSE 3000
CMD ["node", "server.js"]