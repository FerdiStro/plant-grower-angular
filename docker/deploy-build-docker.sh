echo "Build Project ENV=prod"
cd ..
npm install
ng build --prod

echo "Build Docker"
docker build -t plant-grower-angular .

echo "Deploy Docker"
#docker stack deploy -c docker/docker-compose.yml PLANT
#Stack deploy doesn't work

cd docker

docker-compose up -d

