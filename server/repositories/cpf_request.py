from pymongo import MongoClient
from bson.objectid import ObjectId
from models.cpf_request import CpfRequest
from utils.serialize_data import serialize_data


class CpfRequestRepository:
    def __init__(self) -> None:
        self.__vitima = MongoClient()
        self.__bd = self.__vitima.banco
        self.__collection = self.__bd.request

    def insert_cpf_request(self, new_cpf_request: CpfRequest):
        inserted_id = self.__collection.insert_one(new_cpf_request.dict()).inserted_id
        return serialize_data(str(inserted_id))

    def update_item_request(self, id: str):
        item_update = self.__collection.update_one({"_id": ObjectId(id)}, {"$set":{"status": "Encontrado"}})
        return serialize_data(str(item_update))

    def get_all_cpf_request(self):
        cpf_request = self.__collection.find({})
        return serialize_data(list(cpf_request))

    def get_cpf_request(self, id: str):
        cpf_request_id = self.__collection.find_one({"_id": ObjectId(id)})
        return serialize_data(cpf_request_id)

    def delete_cpf_request(self, id: str):
        delete_cpf = self.__collection.delete_one({"_id": ObjectId(id)})
        return bool(delete_cpf)

