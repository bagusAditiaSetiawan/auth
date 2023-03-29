
## Cara Running di local
1. copy .env.example menjadi .env dan sesuaikan env
2. running (npm run install)
3. npm run migrate-prod or npm prisma migrate dev

## Cara Menggunakan Dengan Docker
1. run ( docker compose up )
2. masuk ke cli auth -> admin api terus printahkan (npm run migrate-prod or npx prisma migrate dev)
## Cara Running Test
1. Masuk Cli auth -> admin api
2. Running npm run test

### Berikut adalah ERD
![image info](./photos/auth%20system.png)
### Berikut adalah DFD
![image info](./photos/flow.png)