FROM python:3.12-slim
WORKDIR /app

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 5000

ENV FLASK_ENV=production

CMD ["python", "server.py"]


########
# # Stage 1: Build the React app
# FROM node:16 as build

# WORKDIR /app

# COPY frontend/package.json frontend/package-lock.json ./
# RUN npm install

# COPY frontend/ ./
# RUN npm run build

# # Stage 2: Build the Python Flask app
# FROM python:3.9-slim

# WORKDIR /app

# COPY requirements.txt ./
# RUN pip install --no-cache-dir -r requirements.txt

# COPY . .

# # Copy the React build from the previous stage
# COPY --from=build /app/build ./frontend/build

# EXPOSE 5000

# CMD ["python", "server.py"]


