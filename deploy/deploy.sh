# setup
cd /root
systemctl stop electricity-api

# global
apt-get install build-essential nginx
cp deploy/nginx.default /etc/nginx/sites-available/default
systemctl restart nginx

# angular_app
curl -sL https://deb.nodesource.com/setup_6.x -o nodesource_setup.sh
bash ./nodesource_setup.sh
apt-get install nodejs
npm install

# TODO add angular production server

# flask app
sudo apt-get install python-pip python-dev 
pip install virtualenv

cd api
virtualenv apivenv
source apivenv/bin/activate
pip install requirements.txt

cd ..
cp deploy/api.service /etc/systemd/system/
systemctl daemon-reload
systemctl start electricity-api

# TODO ensure www-data is in www-data group

# TODO REPLACE
npm start