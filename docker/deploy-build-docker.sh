echo "Build Project"
cd ..
npm install
ng build

echo "Build Docker"
docker build -t plantgrowerangular .

echo "Deploy Docker"
#docker stack deploy -c docker/docker-compose.yml PLANT
#Stack deploy doesn't work

cd docker

docker-compose up -f

