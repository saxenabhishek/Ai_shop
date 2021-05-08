import uuid
import argparse
import redis
import boto3
import json
from botocore.exceptions import ClientError

parser = argparse.ArgumentParser()
parser.add_argument("-i", "--image", type=str, help="image loc")
parser.add_argument("-p", "--price", type=int, help="prod price")
parser.add_argument("-t", "--title", type=str, help="prod title")
parser.add_argument("-d", "--disc", type=str, help="prod discrip")
parser.add_argument("-s", "--st", type=int, help="number of stars")
parser.add_argument("-dco", "--dcount", type=int, help="discount")
parser.add_argument("-ty", "--ty", type=str, help="prod type", nargs="+")

args = parser.parse_args()

r = redis.Redis()
# dynamodb = boto3.resource("dynamodb")
s3 = boto3.client("s3")
# table = dynamodb.Table("ai-shop-products")


def addprod(price, image, title, disc, st, discount, ty):
    res = s3.upload_file("TestImages/" + image + ".jpg", "ai-shop", image + ".jpg", ExtraArgs={"ACL": "public-read"})
    print(res)
    id = "_".join(ty) + ":" + str(uuid.uuid4())
    print(id)
    prod = {
        "price": price,
        "lowpri": discount,
        "des": disc,
        "stars": st,
        "image": image + ".jpg",
        "title": title,
    }
    r.set(id, json.dumps(prod))
    print(json.dumps(prod))


if __name__ == "__main__":
    res = addprod(args.price, args.image, args.title, args.disc, args.st, args.dcount, args.ty)
    pass
