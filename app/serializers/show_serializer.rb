class ShowSerializer < ActiveModel::Serializer
  attributes :id, :date, :venue, :city, :state, :door_deal
  belongs_to :user
end
