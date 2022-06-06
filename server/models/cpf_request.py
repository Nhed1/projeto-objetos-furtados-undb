import re
from pydantic import BaseModel

class CpfRequest(BaseModel):
    cpf: str
    nome: str
    id_item: int
    nome_item: str
    localizacao: str
    status: str