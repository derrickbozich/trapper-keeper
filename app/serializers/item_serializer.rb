class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :kind, :wholesale_price
end
