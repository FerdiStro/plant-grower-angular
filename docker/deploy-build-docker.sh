echo "Build Project"
cd ..
ng build
cd docker

echo "Build Docker"
docker build -t plantgrowerangular .

echo "Deploy Docker"
docker stack deploy -c docker-compose.yml PLANT

