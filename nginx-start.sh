HERE=`readlink -f $0`
HERE=`dirname $HERE`

mkdir -p $HERE/var
nginx -p $HERE/ -c nginx.conf &
