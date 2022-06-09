from pymongo import MongoClient
from bson.objectid import ObjectId
from models.item_request import ItemRequest
from models.item_request import AtualizarItem
from utils.serialize_data import serialize_data


class ItemRequestRepository:
    def __init__(self) -> None:
        self.__vitima = MongoClient()
        self.__bd = self.__vitima.banco
        self.__collection = self.__bd.request

    def insert_item_request(self, new_item_request: ItemRequest):
        inserted_id = self.__collection.insert_one(new_item_request.dict()).inserted_id
        return serialize_data(str(inserted_id))

    def update_item_request(self, id: str, item_update_request: AtualizarItem):
        item_update = self.__collection.update_one({"_id": ObjectId(id)}, {"$set": item_update_request.dict()})
        return serialize_data(str(item_update))

    def get_all_item_request(self):
        item_request = self.__collection.find({})
        return serialize_data(list(item_request))

    def get_item_request(self, id: str):
        item_request_id = self.__collection.find_one({"_id": ObjectId(id)})
        return serialize_data(item_request_id)

    def delete_item_request(self, id: str):
        delete_item = self.__collection.delete_one({"_id": ObjectId(id)})
        return bool(delete_item)

